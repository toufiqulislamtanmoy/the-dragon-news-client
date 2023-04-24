import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaRegEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCard = ({ news }) => {
    const { _id, title, rating, total_view, author, thumbnail_url, image_url, details, } = news;

    const { name, img, published_date } = author;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-3'>
                    <Image style={{ height: '40px' }} src={img} roundedCircle />
                    <div>
                        <p className='m-0'>{name}</p>
                        <p className='m-0'><small>{moment(published_date).format('yyy-MM-DD')}</small></p>
                    </div>
                </div>
                <div className='d-flex gap-3'>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250
                            ? <>{details}</>
                            : <> {
                                details.slice(0, 250)
                            }....
                                <Link className='d-block text-info text-decoration-none' to={`/news/${_id}`}>Read More</Link>
                            </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center gap-1'>
                   
                    <div className='m-0 d-flex align-items-center '>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                            readonly
                            className='text-warning'
                        />
                    </div>
                    <p className='m-0'>{rating?.number}</p>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <FaRegEye /> <p className='m-0'><small>{total_view}</small></p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;