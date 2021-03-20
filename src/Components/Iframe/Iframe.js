import React from 'react';
const Iframe = React.createClass({     
    render: function() {
      return(         
        <div>          
          <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
        </div>
      )
    }
  });
  
  ReactDOM.render(
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.92013262012!2d90.36077840633295!3d23.87667185263164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616252782264!5m2!1sen!2sbd" height="500" width="500"/>,
    document.getElementById('example')
  );
  