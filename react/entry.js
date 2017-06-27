var Head=require('./modules/head.js')
var Conn=require('./modules/conn.js')
var Foot=require('./modules/foot.js')

var React=require('react')
var ReactDOM=require('react-dom')


var Zong=React.createClass({
	render:function(){
		return(
			<div>
			    <Head/>
			    <Conn/>
			    <Foot/>
			</div>
		)
	}
})

ReactDOM.render(<Zong/>,document.getElementById('out'))
