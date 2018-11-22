import React from 'react';

const Footer = () => {
  return <div> hellow</div>;
};

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfLikes: 1,
      isToggleOn: true,
      isLoggedIn: false,
      date: new Date().toString()
    };
    console.log('init');

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };

  componentDidMount() {
    //API call
    console.log('im component did mount');
    // alert('your page is loaded');
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({ date: new Date().toString() });
    }, 1000);
    console.log('componentwillmount');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    console.log('Rendering........');
    const { app } = this.props;
    const { isLoggedIn, isToggleOn, date } = this.state;

    return (
      <div>
        <div className={isToggleOn ? 'bg-color-red' : 'bg-color-blue'}>i'm Body of my {app}</div>
        <div>{date}</div>
        <div onClick={this.handleClick}>{isToggleOn ? 'true' : 'false'}</div>
      </div>
    );
  }
}

export default Body;
