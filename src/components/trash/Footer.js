import React from 'react';

class Footer extends React.Component {
  render() {
      // console.table(this.props);
    return (
        <footer>Hello, {this.props.user}!</footer>
    );
  }
}

export default Footer;
