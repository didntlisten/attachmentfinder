(function() {
 
  return {
    events: {
      'ticket.save':'findAttachments'
    },
 
    findAttachments: function() {
 
      var comment = this.comment(),
          ticket = this.ticket();
 
      ticket.comments().forEach(function(comment) { // Checks all but current comment for attachments
        var firstImageAttachment = comment.imageAttachments().get(0);
        var firstNonImageAttachment = comment.nonImageAttachments()[0];
 
        if (firstImageAttachment !== undefined || firstNonImageAttachment !== undefined) {
           ticket.tags().add('there_is_an_attachment_on_previous_comments');
        }
 
      });
 
      if (comment.attachments().length > 0) { // Checks current comment for attachments
        ticket.tags().add('there_is_an_attachment_on_current_comment');
      }
 
      return true;
 
    }
  };
 
}());