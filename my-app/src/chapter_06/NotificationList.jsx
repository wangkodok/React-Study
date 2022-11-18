import React from "react";
import Notification from "./Notification";

const reservedNotification = [
    { idKey: 1, message: '안녕하세요, 오늘 일정을 알려드립니다.' },
    { idKey: 2, message: '점심 식사 시간입니다.' },
    { idKey: 3, message: '이제 곧 미팅이 시작됩니다.' },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotification.length) {
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                // clearInterval(timer);
                this.setState({
                    notification: [],
                })
            }
        }, 3000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification key={notification.idKey} message={notification.message} />
                })}
            </div>
        )
    }
}

export default NotificationList;