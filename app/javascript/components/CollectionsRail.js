import React from "react";
import PropTypes from "prop-types";

class CollectionsRail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      collections: []
    }
  }

  componentDidMount() {
    let promise = this.getCollections();
  }

  getCollections = async () => {
    let response = await fetch('//localhost:4000/api/v1/collections/');

    if (!response.ok) {
      console.error('Failed to fetch collections');
      return []
    }

    let json = await response.json();
    this.setState({
      collections: json.data
    })
  }

  renderCollections = () => {
    const {
      collections
    } = this.state;

    return (
      <React.Fragment>
        <div className={'flex flex-row overflow-x-auto'}>
          {
            collections.map((c, i) =>
              <React.Fragment>
                <div className={'flex flex-col'}>
                  <div className="story rounded-full mr-5" key={i}>
                    <a href={'http://localhost:4000/collections/' + c.attributes.Identifier} target="_blank">
                      <img src={c.attributes.CoverImage} className="rounded-full h-16 w-16 cursor-pointer"/>
                    </a>
                  </div>
                  <span className={'text-center font-semibold w-16 mt-2 text-sm'}>{c.attributes.Title}</span>
                </div>
              </React.Fragment>
            )
          }
        </div>
      </React.Fragment>
    )
  }

  render () {
    return (
      <React.Fragment>
        <div className="w-full flex flex-row">
          {this.renderCollections()}
        </div>
      </React.Fragment>
    );
  }
}

export default CollectionsRail;
