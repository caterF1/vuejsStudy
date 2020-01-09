export const computedLengthMixin = {
    computed:{
        computedLength() {
            return this.filterInput + " (" + this.filterInput.length + ")";
        }
    }
}