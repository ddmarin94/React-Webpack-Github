import React, {Component} from 'react'
import styles from './searchUser.css'

class SearchUser extends Component {
  render () {
    return (
      <div>
        <h1 className={styles.MainTitle}> Github Finder </h1>
        <form className={styles.SearchBarPosition}>
          <input className={styles.InputValue} placeholder='Username + Press Enter' type='text' value={this.props.value} onChange={this.props.Change} />
          <button className={styles.button} onClick={this.props.SearchUser}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchUser
