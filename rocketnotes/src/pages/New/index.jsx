import {Header} from '../../components/Header'
import {Container} from './styles'
import { Form } from './styles'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                    </header>
                    <Input placeholder="titulo"/>
                <Textarea placeholder="Obsevações"/>
                </Form>
            </main>
        </Container>
    )
}