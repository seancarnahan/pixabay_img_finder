import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component{
  state = {
    open: false,        //if dialog is open or not
    currentImg: ''      //what image is the dialog being opened on
  }

  handleOpen = img => {
    this.setState({ open: true, currentImg: img});
  }

  handleClose= img => {
    this.setState({ open: false, currentImg: img});
  }


  render(){
    let imageListContent;
    const { images } = this.props;

    if(images){
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={ () => this.handleOpen(img.largeImageURL)}>
                  <ZoomIn color="white"/>
                </IconButton>
              }
              >
                <img src={img.largeImageURL}/>
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      >

      </FlatButton>
    ]

    return(
      <div>
        {imageListContent}
        <Dialog
          action={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="" style={{ width: '100%'}}/>
        </Dialog>
      </div>;

    );
  }

}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}


export default ImageResults
