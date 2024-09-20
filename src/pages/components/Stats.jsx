import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const stats = [
  { value: 10, label: 'Years of Experience' },
  { value: 170, label: 'Happy Clients' },
  { value: 200, label: 'Employees' },
  { value: 2, label: 'Offices Around the World' },
]

const Stats = ({ heading, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      className="py-5 bg-primary"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Row className="text-center">
          <Col xs={12} className='text-white mb-5'>
            <h2>{heading}</h2>
            <p>{description}</p>
          </Col>
          {stats.map((stat, index) => (
            <Col key={index} xs={12} md={6} lg={3} className="mb-4">
              <StatItem value={stat.value} label={stat.label} delay={index * 0.2} inView={inView} />
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  )
}

const StatItem = ({ value, label, delay, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(value)
      const duration = 2000
      let startTimestamp = null

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        setCount(Math.floor(progress * (end - start) + start))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [inView, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="display-4 text-warning mb-2 fw-bold">{count}+</div>
      <div className="fw-normal fs-5 text-white">{label}</div>
    </motion.div>
  )
}

export default Stats
