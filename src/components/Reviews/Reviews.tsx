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
        {
            name: 'Jack',
            text: 'You can use an external keyboard with any laptop that has a USB-A, USB-C port, or Bluetooth (for wireless keyboards).',
        },
        {
            name: 'Andrii',
            text: 'You can use an external keyboard with any laptop that has a USB-A, USB-C port, or Bluetooth (for wireless keyboards).',
        },
        {
            name: 'Vitia',
            text: 'You can use an external keyboard with any laptop that has a USB-A, USB-C port, or Bluetooth (for wireless keyboards).',
        },
    ]

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
            <h2>Reviews</h2>
            {reviews.map((review: Review, i: number) => (
                <Card
                    variant="outlined"
                    style={{ margin: '20px 0', background: '#b7ef6c' }}
                    key={i}
                >
                    <CardContent>
                        <Typography variant="h6">{review.name}</Typography>
                        <Typography variant="h6">{review.text}</Typography>
                    </CardContent>
                </Card>
            ))}
            <Card
                variant="outlined"
                style={{
                    maxWidth: 300,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <CardContent>
                    <form onSubmit={onSend}>
                        <Typography variant="h6">
                            Please leave a review
                        </Typography>
                        <div>
                            <TextField
                                size="small"
                                value={newReview.name}
                                onChange={handleChangeName}
                            />
                        </div>
                        <br />
                        <TextareaAutosize
                            minRows={5}
                            value={newReview.text}
                            onChange={handleChangeText}
                        />
                        <div>
                            <Button variant="contained" type="submit">
                                Leave review
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Reviews
