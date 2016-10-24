import React from 'react';

class ImageUploader extends React.Component {
  
  constructor(props) {
    super(props);
    this.showPreview = this.showPreview.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.state = {file:'', imagePreviewUrl:''}
  }
  showPreview(e){
  	let reader = new FileReader();
  	let file = e.target.files[0];
  	this.setState({ file:file});
  	// reader.onloadend = () => {
  	// 	this.setState({file:file, imagePreviewUrl:reader.result});	
  	// }
  	// reader.readAsDataURL(file);
  }
  uploadImage(){

  	console.log('submitted image ', this.state.file)
  }
  render() {
    return (
      <div>
      	<h3> Image Uploader </h3>
      	<input type="file" onChange={this.showPreview}/>
      	<input type='button' value='Upload' onClick={this.uploadImage}/>
      	<div id='div1' style={{width: 500, height:300, float: 'left', border:'5px solid gray' }} >
      		<img src={this.state.imagePreviewUrl} style={{width: 500, height:300, float: 'left', border:'5px solid gray' }}/>
      	</div>
      	
      </div>
    );
  }
}


export default ImageUploader