import  React from 'react'
import ReactDom from 'react-dom'
import Model from './Model'
import {Modal, Popover, Tooltip, Button, OverlayTrigger } from 'react-bootstrap'

class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = { data:[15, 2, 18, 30, 10] }
	}
	render() {
		var colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

		return (
		<div>
			<Pie
				data={ this.state.data }
				radius={ 100 }
				hole={ 10 }
				colors={ colors }
				labels={ true }
				percent={ true }
				strokeWidth={ 2 }
				stroke={ '#fff' }
			/>
			
		</div>
		);
	}
};

function getAnglePoint(startAngle, endAngle, radius, x, y) {
	var x1, y1, x2, y2;

	x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
	y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
	x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
	y2 = y + radius * Math.sin(Math.PI * endAngle / 180);

	return { x1, y1, x2, y2 };
}

class Pie extends React.Component {
	constructor(props){
		super(props);
		this.state ={showModal : false};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}
	open(props){
		console.log("this is open",props)
		this.setState({showModal:true})
	}
	close(){
		this.setState({showModal:false})
	}   
	render() {
		var colors = this.props.colors,
			colorsLength = colors.length,
			labels = this.props.labels,
			hole = this.props.hole,
			radius = this.props.radius,
			diameter = radius * 2,
			self = this,
			sum, startAngle, d = null;

		sum = this.props.data.reduce(function (carry, current) { return carry + current }, 0);
		startAngle = 0;

  
		return (
			<div>
			<Modal show={this.state.showModal} onHide={this.close}>
          			<Modal.Header closeButton>
           				 <Modal.Title>Modal heading</Modal.Title>
         			 </Modal.Header>
         			 <Modal.Body>
	          		 	 <h4>Text in a modal</h4>
			            
			            <h4>Overflowing text to show scroll behavior</h4>
			            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            
         			 </Modal.Body>
         			 <Modal.Footer>
          				  <Button onClick={this.close}>Close</Button>
       	   			</Modal.Footer>
       			</Modal>

			<svg width={ diameter } height={ diameter } viewBox={ '0 0 ' + diameter + ' ' + diameter }>
			
				{ this.props.data.map(function (slice, sliceIndex) {
					var angle, nextAngle, percent;

					nextAngle = startAngle;
					angle = (slice / sum) * 360;
					percent = (slice / sum) * 100;
					startAngle += angle;
					var that = this;
					return <Slice
						key={ sliceIndex }
						value={ slice }
						percent={ self.props.percent }
						percentValue={ percent.toFixed(1) }
						startAngle={ nextAngle }
						angle={ angle }
						radius={ radius }
						hole={ radius - hole }
						trueHole={ hole }
						showLabel= { labels }
						fill={ colors[sliceIndex % colorsLength] }
						stroke={ self.props.stroke }
						strokeWidth={ self.props.strokeWidth }
						onSliceClick={self.open}
						
          
					/>
				}) }


			</svg>
			</div>
		);
	}
};

class Slice extends React.Component {
	constructor(props)  {
		super(props)
		this.state = { path : '', x:0 , y:0}	
	}
	
	componentDidMount() {
		this.animate();
	}
	animate() {
		this.draw(0);
	}
	_onClick(){
		console.log("onMouseEnter")
    	
	}
	draw(s) {
		
		var p = this.props, path = [], a, b, c, self = this, step;

		step = p.angle / (37.5 / 2);

		if (s + step > p.angle) {
			s = p.angle;
		}

		// Get angle points
		a = getAnglePoint(p.startAngle, p.startAngle + s, p.radius, p.radius, p.radius);
		b = getAnglePoint(p.startAngle, p.startAngle + s, p.radius - p.hole, p.radius, p.radius);

		path.push('M' + a.x1 + ',' + a.y1);
		path.push('A'+ p.radius +','+ p.radius +' 0 '+ (s > 180 ? 1 : 0) +',1 '+ a.x2 + ',' + a.y2);
		path.push('L' + b.x2 + ',' + b.y2);
		path.push('A'+ (p.radius- p.hole) +','+ (p.radius- p.hole) +' 0 '+ (s > 180 ? 1 : 0) +',0 '+ b.x1 + ',' + b.y1);

		// Close
		path.push('Z');

		this.setState({ path: path.join(' ') });

		if (s < p.angle) {
			setTimeout(function () { self.draw(s + step) } , 16);
		} else if (p.showLabel) {
			c = getAnglePoint(p.startAngle, p.startAngle + (p.angle / 2), (p.radius / 2 + p.trueHole / 2), p.radius, p.radius);

			this.setState({
				x: c.x2,
				y: c.y2
			});
		}
	}
	render() {
		const popover = (
      <Popover id="modal-popover" title=" this is long title">
		    <svg width="30" height="30">
				<circle cx="10" cy="10" r="10" fill={this.props.fill} />
			</svg>
        {this.props.value}
      </Popover>
    );
		return (
			 <OverlayTrigger overlay={popover}>
			<g overflow="hidden" onClick={this.props.onSliceClick}>
       		
				<path
					d={ this.state.path }
					fill={ this.props.fill }
					stroke={ this.props.stroke }
					strokeWidth={ this.props.strokeWidth ? this.props.strokeWidth : 2 }
					 />
				{ this.props.showLabel && this.props.percentValue >  1?
					<text x={ this.state.x } y={ this.state.y } fill="#fff" textAnchor="middle">
						{  this.props.value }
					</text>
				: null }
			
			</g>
			</OverlayTrigger>
		);
	}
};

export default App