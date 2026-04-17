class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp,value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let value = this.keyStore.get(key) || [];
        let l = 0;
        let r = value.length - 1;
        let res = "";
        while(l <= r){
            let m = Math.floor((l+r)/2);
            if(value[m][0] <= timestamp){
                res = value[m][1];
                l = m + 1;
            }else {
                r = m - 1;
            }
        }
        return res;
    }
}
