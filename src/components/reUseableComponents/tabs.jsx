import React, { Component } from "react";

class Tabs extends Component {
  state = {
    selected: this.props.selected || 0
  };

  handleChange(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <>
        <div>
          {this.props.children.map((element, index) => {
            return (
              <div
                key={index}
                className={index === this.state.selected ? "nav-item mb-2 nav-link nav-link-faded bg-primary text-white rounded w-100 cursor-pointer " : "nav-item mb-2 nav-link nav-link-faded bg-light w-100 cursor-pointer rounded"}
                onClick={() => this.handleChange(index)}
              >
                {element.props.title}
              </div>
            );
          })}
        </div>
        <div className="mt-4">{this.props.children[this.state.selected]}</div>
      </>
    );
  }
}

export default Tabs;
