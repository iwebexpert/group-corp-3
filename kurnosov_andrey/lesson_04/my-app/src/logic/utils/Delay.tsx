export class Delay {
    constructor(private delay: number) {
    }
    private _timeout: number | null = null;
    public start(func: () => void, mode: 'from-first' | 'from-last') {
        const _setTimeout = () => {
            this._timeout = window.setTimeout(
                () => {
                    func();
                    if (this._timeout != null) {
                        window.clearTimeout(this._timeout);
                        this._timeout = null;
                    }
                }, this.delay);
        };

        if (this._timeout === null) {
            _setTimeout();
        }
        else if (mode === 'from-last') {
            window.clearTimeout(this._timeout);
            _setTimeout();
        }
    }
}
