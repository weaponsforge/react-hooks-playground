import PropTypes from 'prop-types'

function ContactForm ({ submitForm }) {
  return (
    <form onSubmit={submitForm}>
      <h4>Add Todo</h4>
      <input type="text" id="title" placeholder="Enter title" /><br />
      <button type="submit">Add</button>
    </form>
  )
}

ContactForm.propTypes = {
  submitForm: PropTypes.func
}

export default ContactForm
