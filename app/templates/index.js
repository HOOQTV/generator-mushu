/** @module <%= className %>*/

/** Class representing <%= className %> */
export default class <%= className %> {
    /**
     * Constructs <%= className %>
     *
     * @param {String} name - The name.
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Says hello.
     *
     * return {String} The hello string.
     */
    async hello() {
        return `Hello ${this.name}`;
    }
}
