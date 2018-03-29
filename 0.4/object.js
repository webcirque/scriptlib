//CSV File Support 1.0
function Csv() {
    this.state = function () {
        return !(_.is.null(this.list));
    }
    this.parse = function (text) {
        if (_.is.null(text)) {
            console.error("Empty text to parse.");
        }
        else {
            console.log(text);
            let obj = text.split("\n");
            console.log("Csv lined.");
            let obj2 = [];
            let donum = 0
            while (donum < obj.length) {
                obj2[obj2.length] = obj[donum].split(",");
                if (obj2[donum][obj2[donum].length-1] == "") {
                    obj2[donum].pop();
                }
                donum ++;
            }
         console.log(obj.toString());
           console.log("Csv styled.");
           this.list = obj2;
        }
    }
    this.export = function (type) {
        let obj = this.list;
        let obj2 = "";
        let donum = 0;
        if (_.is.null(type) || type == 0) {
            while (donum < obj.length) {
                obj2 += obj[donum].toString() + "\n";
                donum ++;
            }
        }
        else if (type == 1) {
            while (donum < obj.length) {
                obj2 += obj[donum].toString() + ",\n";
                donum ++;
            }
        }
        return obj2;
    }
    this.clear = function () {
        this.list = null;
    }
    this.set = function (row, line, text) {
        if (_.is.null(row) || this.list[line].length <= row) {
            console.error("Invalid row number.");
        }
        if (_.is.null(line) || this.list.length <= line) {
            console.error("Invalid line number.");
        }
        if (this.list[0].length > row && this.list.length > line && _.is.null(text) && !(_.is.null(row)) && !(_.is.null(line))) {
            this.list[line][row] = "";
            console.error("Deleted unit at row $1, line $2.".replace("$1",row).replace("$2",line));
        }
        if (this.list[0].length > row && this.list.length > line && !(_.is.null(text)) && !(_.is.null(row)) && !(_.is.null(line))) {
            this.list[line][row] = text;
        }
    }
}
