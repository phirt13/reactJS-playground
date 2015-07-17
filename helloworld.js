var CommentBox = React.createClass({
  render: function() {
    return (
      <section className="commentBox">
        Hello, world! I am a CommentBox.
      </section>
    );
  }
});

  React.render(
  <CommentBox />,
  document.getElementById('content')
);

var CommentList = React.createClass({
  render: function() {
    return (
      <section className="commentList">
        I am a CommentList.
      </section>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {

  }
})
