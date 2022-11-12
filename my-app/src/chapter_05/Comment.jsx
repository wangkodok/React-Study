import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
    commentText: {
        color: 'block',
        fontSize: 16,
    },
}

function Comment(props) {
    return (
        <div style={styles.contentContainer}>
            <h1 style={styles.nameText}>{props.name}</h1>
            <p style={styles.commentText}>{props.comment}</p>
        </div>
    )
}

export default Comment;