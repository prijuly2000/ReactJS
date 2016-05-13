
var products =[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var SearchBox = React.createClass({
	onTextChange:function(e){
		this.props.onTextChange(e);
	},
	render:function(){
		return(
			<div>
				Search : <input type="text" onChange={this.onTextChange}/>
			</div>)
	}
});

var ProductList=React.createClass({
	render:function(){
		var category="";
		var list=[];
		products.map(function(product){
				if(product.category !==  category){
					category =product.category;
					list.push(<li><strong>{product.category}</strong></li>);
				}
				if(this.props.getSearchStr() ==='' || product.name.toLowerCase().match(this.props.getSearchStr()))
					list.push(<li>{product.name} {product.price}</li>);
				
			}.bind(this))
		return <ul>{list}</ul>;
	}
})

var SearchPanel= React.createClass({
	getInitialState:function(){
		return {searchStr:''}
	},
	getSearchStr:function(){
		return this.state.searchStr;
	},
	onTextChange:function(e){
		this.setState({searchStr: e.target.value})
	},
	render:function(){
		return (
			<div>
				<SearchBox onTextChange={this.onTextChange}/>
				<ProductList getSearchStr={this.getSearchStr}/>
			</div>);
	}
});

ReactDOM.render(<SearchPanel/>,document.getElementById('content'))