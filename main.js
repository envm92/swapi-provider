/**
     * Attributes
     *  search: number (optionar)
     *  format-wookiee: boolean (optional)
     *  resourse: string [ films| people | planets | species | starships | vehicles ] (optional)
     *  id-resourse: number (optional)
     *  schema: boolean (optional)
     */
class SwapiProvider extends HTMLElement {
    /**
     * Generate the request from the attributes
     */
    __getRequest() {
        const BASE_URL = 'https://swapi.dev/api/';
        const RESOURSES = ['films','people','planets','species','starships','vehicles'];
        let urlRequest = BASE_URL;
        let params = [];
        if(this.attributes.resourse && RESOURSES.includes(this.attributes.resourse.value)) {
            urlRequest += `${this.attributes.resourse.value}/`;
            if(this.attributes.id && this.attributes.schema) {
                const responseEvent = new CustomEvent('swapi-error', {
                    detail: {
                        code: '0',
                        msg: 'Not support id and schema',
                        sourse: 'generate-url'
                    }
                });
                this.dispatchEvent(responseEvent);
                return '';
            } else if (this.attributes['id-resourse']) {
                urlRequest += `${this.attributes['id-resourse'].value}`;
            } else if (this.attributes.schema) {
                urlRequest +=  'schema';
            }
        }
        // Add queries
        if (this.attributes.search) {
            params.push(['search', this.attributes.search.value]);
        }
        if (this.attributes['format-wookiee']) {
            params.push(['format', 'wookiee']);
        }
        let url = new URL(urlRequest);
        url.search = new URLSearchParams(params).toString();
        return url;
    }

    /**
     * Fetch an trigger custom event
     *  if the response is success trigger swapi-response else swapi-error
     */
    _fetch(url) {
        fetch(url).then(res => {
            if(res.status === 200) {
                return res.text();
            } else {
                throw new Error(res.status);
            }
        })
        .then(text => {
            text = text.replace(/whhuanan/g, '"whhuanan"');
            this.response = JSON.parse(text);
            const responseEvent = new CustomEvent('swapi-response', {
                detail: this.response
            });
            this.dispatchEvent(responseEvent);
        }).catch(e => {
            const responseEvent = new CustomEvent('swapi-error', {
                detail: {
                    code: e,
                    sourse: 'request'
                }
            });
            this.dispatchEvent(responseEvent);
        });
    }

    /**
     * Get the next page
     */
    getNext() {
        if (this.response && this.response.next) {
            this._fetch(this.response.next);
        }
    }

    /**
     * Get the previous page
     */
    getPrevious() {
        if (this.response && this.response.previous) {
            this._fetch(this.response.previous);
        }
    }

    connectedCallback() {
        let url = this.__getRequest();
        if (url) {
            this._fetch(url);
        }
    }
}

customElements.define('swapi-provider', SwapiProvider);