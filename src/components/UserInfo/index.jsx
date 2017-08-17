import React, {Component} from 'react'
import styles from './userInfo.css'

class UserInfo extends Component {
  render () {
    return (
      <div>
        <img className={styles.Picture} src={this.props.userInfo.photo} alt='profile img' />
        <p>{this.props.userInfo.userName} / {this.props.userInfo.username}</p>
        <p>{this.props.userInfo.location}</p>
        <p>Repositories: {this.props.userInfo.publicRepos}</p>
        <p>Followers: {this.props.userInfo.followers}</p>
        <p>Following: {this.props.userInfo.following}</p>
      </div>
    )
  }
}

export default UserInfo
