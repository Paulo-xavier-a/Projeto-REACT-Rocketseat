import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import {Button } from '../../components/Button'


import { Container, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">

            <NoteItem value="react"/>
            <NoteItem isNew placeholder="Nova Tag"/>
            </div>
          </Section>
          <Button title="salvar"/>
        </Form>
      </main>
    </Container>
  )
}