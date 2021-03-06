/*
 * Create a reply button and add it to the page
 *
 * Requires jQuery
 *
 */

(function($) {

    function renderBtn() {
        $('<style/>').html(['.reply-btn {',
			'border: 0;',
			'background: transparent;',
			'position: absolute;',
			'top: 0px;',
			'right: 52px;',
			'height: 24px;',
			'width: 24px;',
			'padding: 0',
		'}',
		'.reply-btn img {',
			'width: 100%',
		'}'].join('')).prependTo(document.head);

        var replyBtn = $('<button/>', {
			'class': 'reply-btn',
			html: '<img src="/bags/common/tiddlers/reply.png" alt="reply to this tiddler"/>'
		}).appendTo(document.body);

        return replyBtn;
    }

	$(function() {

        $.getJSON("/status", function(data) {
            if(data && data.username !== "GUEST") {
                var replyBtn = renderBtn();

                if (typeof createReplyButton === 'function') {
                    createReplyButton(replyBtn[0]);
                } else {
                    $.getScript('/bags/common/tiddlers/_reply-button.js', function() {
                        createReplyButton(replyBtn[0]);
                    });
                }
            }
        })

	});

}(jQuery));
