import { Socket, SocketConnectOption } from "phoenix";

type SockParamsPromise = () => Promise<Record<string, unknown>>;
type SocketParams =
  | Promise<Record<string, unknown>>
  | (() => Promise<Record<string, unknown>>)
  | SockParamsPromise;

export default class AsyncParamsPhoenixSocket extends Socket {
  params: SocketParams;

  constructor(endPoint: string, opts: Partial<SocketConnectOption> = {}) {
    super(endPoint, opts);

    this.params = ((opts.params as SocketParams) || {}) as SocketParams;
  }

  connect(_params: SocketParams): void {
    if (
      this.params?.constructor == Function &&
      (this.params as SockParamsPromise)()?.constructor === Promise
    ) {
      Promise.resolve((this.params as SockParamsPromise)()).then((params) =>
        super.connect(params)
      );
    } else {
      super.connect();
    }
  }
}
