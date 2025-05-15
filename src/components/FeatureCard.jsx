const FeatureCard = ({ icon, title, description }) => {
  return (
    <div style={{
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{
        fontSize: '2rem',
        color: '#4a6bff',
        marginBottom: '20px'
      }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard