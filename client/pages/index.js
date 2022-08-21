import { Container } from '@mui/material'
import Head from 'next/head'
import Calculator from '../components/calculator'

export default function Home() {
  return (
    <div style={{ "height": "500px" }}>
      <Container style={{
        "height": "100%",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
      }}>
        <Calculator />
      </Container>
    </div >
  )
}
