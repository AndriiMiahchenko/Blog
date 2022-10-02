import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        // {
        //     name: 'Andrii',
        //     text: 'You can use an external keyboard with any laptop that has a USB-A, USB-C port, or Bluetooth (for wireless keyboards).',
        // },
        // {
        //     name: 'Alex',
        //     text: 'You can use an external keyboard with any laptop that has a USB-A, USB-C port, or Bluetooth (for wireless keyboards).',
        // },
    ]

    let presentTime = new Date().toLocaleDateString()

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <div
                style={{ paddingBottom: '50px', backgroundColor: 'lightblue' }}
            >
                <h2
                    style={{
                        textAlign: 'center',
                        borderTop: '2px solid tomato',
                        paddingTop: '20px',
                        fontSize: '40px',
                    }}
                >
                    Reviews
                </h2>
                {reviews.map((review: Review, i: number) => (
                    <Card
                        variant="outlined"
                        style={{ margin: '20px 0', background: '#f4433669' }}
                        key={i}
                    >
                        <CardContent>
                            <Typography variant="h6">
                                {review.name}
                                {':'}
                            </Typography>
                            <Typography variant="h6">{review.text}</Typography>
                            <Typography variant="h6" textAlign={'end'}>
                                {presentTime}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <Card
                    variant="outlined"
                    style={{
                        margin: '50px auto 0',
                        maxWidth: 600,
                        display: 'flex',
                        justifyContent: 'center',
                        border: '2px solid tomato',
                        backgroundColor: '#ff63471c',
                    }}
                >
                    <CardContent>
                        <form onSubmit={onSend}>
                            <Typography
                                variant="h6"
                                style={{
                                    fontSize: '26px',
                                    marginBottom: '20px',
                                }}
                            >
                                Please leave a review
                            </Typography>
                            <div>
                                <TextField
                                    size="small"
                                    value={newReview.name}
                                    onChange={handleChangeName}
                                    style={{
                                        width: '400px',
                                        border: '2px solid tomato',
                                        backgroundColor: 'white',
                                    }}
                                />
                            </div>
                            <br />
                            <TextareaAutosize
                                minRows={5}
                                value={newReview.text}
                                onChange={handleChangeText}
                                style={{
                                    width: '400px',
                                    border: '2px solid tomato',
                                }}
                            />
                            <div>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    style={{ margin: '20px 0' }}
                                >
                                    Leave review
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Reviews
