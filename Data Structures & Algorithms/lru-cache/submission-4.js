class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.store = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.store.has(key)){
           return -1;
        }
        let value = this.store.get(key);
        this.store.delete(key);
        this.store.set(key,value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.store.has(key)){
            this.store.delete(key);

        }else if(this.capacity === this.store.size){
            this.store.delete(key);
            let firsKey = this.store.keys().next().value;
            this.store.delete(firsKey);
        }
        this.store.set(key,value);
    }
}
