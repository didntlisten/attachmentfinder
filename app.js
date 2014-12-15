(function() {
 
  return {
    events: {
      'ticket.save':'findAttachments'
    },
 
    findAttachments: function() {
 
      var comment = this.comment(),
          ticket = this.ticket();

      var setting2 = this.setting('\"Tag for tickets with previous attachments\"');

      console.log(setting2);
 
      ticket.comments().forEach(function(comment) { // Checks all but current comment for attachments
        var firstImageAttachment = comment.imageAttachments().get(0);
        var firstNonImageAttachment = comment.nonImageAttachments()[0];
 
        if (firstImageAttachment !== undefined || firstNonImageAttachment !== undefined) {
           ticket.tags().add(setting2);
        }
 
      });
 
      var setting1 = this.setting('\"Tag for tickets with current attachments\"');
 
      console.log(setting1);
 
      if (comment.attachments().length > 0) { // Checks current comment for attachments
        ticket.tags().add(setting1);
      }
 
      return true;
 
    }
  };
 
}());