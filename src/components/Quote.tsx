import './Quote.css'

type QuoteProps = {
  text: string
}

export function Quote({ text }: QuoteProps) {
  return <div className='quote'>{text}</div>
}
