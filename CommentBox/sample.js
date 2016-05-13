
var data= [
{
	id:1,
	author:"Pritesh",
	text:"hi,whats up"
},
{
	id:2,
	author:"Mahesh",
	text:"Im doint good"
},
{
	id:3,
	author:"Sandeep",
	text:"Hey Pritesh"
}
];

var Comment = React.createClass({
	render:function(){
		return (
			<div className="comment">
				<div>{this.props.author}</div>
				<div>{this.props.children}</div>
			</div>
			);
	}
});

var CommentList = React.createClass({
		render:function(){
		console.log("CommentList");
		return(
			
			<div>
				{
					this.props.getParentData().map(function(comment){
					return	(<Comment key={comment.id} author={comment.author}>
							{comment.text}
						</Comment>);
					})
				}
			</div>
			);
	}
});
var id=4;
var CommentForm = React.createClass({
	getInitialState:function(){
		return {author:'',text:''}
	},
	authorChange:function(e){
		this.setState({author:e.target.value})
	},
	textChange:function(e){
		this.setState({text:e.target.value})
	},
	addComment:function(e){
		var author = this.state.author;
		var text = this.state.text;
		this.setState({author:'',text:''})
		console.log(author,text)
		this.props.onPostClick({author,text})
	},
	render:function() {
		return (
			<form >
				<input onChange={this.authorChange} value={this.state.author} placeholder="Author" type="text"/>
				<input onChange={this.textChange} value={this.state.text} placeholder="Text" type="text"/>
				<input onClick={this.addComment} type="button" value="Post"/>
			</form>
		);
	}

});
var CommentBox = React.createClass({
	getInitialState:function(){
		return {data};
	},
	commentPost:function(comment){
		var d = this.state.data;
		d.push(comment);
		this.setState({data:d});
	},
	getParentData:function(){
		return this.state.data;
	},
	render:function(){
		return (
			<div className="div">
				<h1>Comments...</h1>
				<CommentList getParentData={this.getParentData}/>
				<CommentForm onPostClick={this.commentPost}/>
			</div>);
	}
});

ReactDOM.render(<CommentBox />,document.getElementById("content"));

