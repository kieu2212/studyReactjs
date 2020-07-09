import React, { Component } from 'react';
import data from './data.json';

export default class BaitapList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data
        };
        console.log(this.state.listMovie);
    }
    renderHTML = () => {
        /**
         * duyệt mảng
         * trả về card-bootstrap
         * renderingElenment show ...
         */
        const { listMovie } = this.state;
        let result = listMovie.map((movie,index) => {
            return (
                <div key={index}>
                    <div className="card card-movie" style={{ width: "22rem" }} >
                        <img src={movie.hinhAnh} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{movie.tenPhim}</h5>
                            <p className="card-text">
                                {movie.moTa}
                            </p>
                        </div>
                    </div>
                </div>
            )
        });
        return result;
    }
    render() {
        return (
            <div>
                <div className="container" id="movie_list">
                    <h3 className="title pt-4 pl-4">DANH SÁCH PHIM</h3>
                    <div className="card-body">
                        {this.renderHTML()}
                    </div>
                </div>
            </div>
        )
    }
}
