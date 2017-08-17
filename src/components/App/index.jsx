import React, { Component } from 'react'
import styles from './app.css'
import UserInfo from '../UserInfo'
import SearchUser from '../SearchUser'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }

 handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.SearchGithubUser(this.state.value)
    this.setState({value: '' })
    
  }

  SearchGithubUser(value) {
    fetch(`https://api.github.com/users/${value || 'ddmarin94'}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        userName: res.name,
        publicRepos: res.public_repos,
        location: res.location,
        username: res.login,
        followers: res.followers,
        following: res.following,
        photo: res.avatar_url
      })
    })
  }

  componentWillMount() {
    this.SearchGithubUser()
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Card}>
          <div>
            <SearchUser
              SearchUser={this.handleSubmit}
              Change={this.handleChange}
              value={this.state.value}
            />
          </div>
          <UserInfo userInfo={this.state} />
        </div>
      </div>
    )
  }
}

export default App
