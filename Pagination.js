import React from 'react';

/**
 * Home to the pagination feature's infrastructure and components, particularly the previous, next and current page functionalities.
 * A few CSS components included for styling and aesthetics.
 */

class Pagination extends React.Component{

    render() {
        const pageLinks = []
    console.log(this.props)
    console.log(pageLinks)

    for(let i = 1; i <= this.props.pages + 1; i++) {
        let active =this.props.currentPage === i ? 'active' : '';
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={(e) => this.props.nextPage(e, i)}><a href="*">{i}</a></li>)
    }

    return(
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    { this.props.currentPage > 1 ? <li className={`waves-effect`} onClick={(e) => this.props.nextPage(e, this.props.currentPage - 1)}><a href="*">Prev</a></li> : ''}
                    { pageLinks }
                    { this.props.currentPage < this.props.pages + 1 ? <li className={`waves-effect`} onClick={(e) => this.props.nextPage(e, this.props.currentPage + 1)}><a href="*">Next</a></li> : ''}
                </ul>
            </div>
        </div>
    )
    }
}

export default Pagination;