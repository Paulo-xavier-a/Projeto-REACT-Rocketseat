import {Header} from '../../components/Header'
import {Container} from './styles'
import { Form } from './styles'
import {Input} from '../../components/Input'

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
                    <Input
                    placeholder="titulo"
                    />
                </Form>
            </main>
        </Container>
    )
}