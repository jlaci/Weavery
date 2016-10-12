var Message = function (tag, data) {
    this.tag = tag;
    this.data = data;
};

Message.prototype = {
    tag: '',
    data : {}
};

module.exports = Message;