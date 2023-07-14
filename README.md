````markdown
# Balcão de Ofertas API

Esta é uma API construída com Node.js, Express, Yarn, TypeScript e TypeORM. A API consiste em um balcão de ofertas, onde os usuários do aplicativo podem interagir com as ofertas disponíveis.

## Funcionalidades

A API possui as seguintes funcionalidades:

1. Listagem das ofertas do dia atual: Retorna as ofertas disponíveis para o dia atual. As ofertas antigas expiram de um dia para o outro.

   - Rota: GET http://localhost:3333/
   - Parâmetros de consulta (query params):
     - `page`: Número da página para exibição das ofertas (opcional)
     - `pageSize`: Tamanho da página para exibição das ofertas (opcional)

2. Criar oferta:
   Cria uma nova oferta associada a um usuário e uma carteira específicos.

   - Rota: POST http://localhost:3333/create-offer/:userId/:walletId

3. Deletar oferta:
   Remove uma oferta específica com base no seu ID e no ID do usuário associado.

   - Rota: DELETE http://localhost:3333/create-offer/:id/:userId

## Configuração e Execução

Siga as etapas abaixo para configurar e executar o projeto:

1. Certifique-se de ter o Node.js instalado em seu ambiente.

2. Instale as dependências do projeto usando o Yarn. Execute o seguinte comando no diretório raiz do projeto:

   ```shell
   yarn install
   ```
````

3. Execute as migrations para criar as tabelas no banco de dados. Execute o seguinte comando:

   ```shell
   yarn typeorm migration:run
   ```

4. Popule as tabelas de usuários e carteiras executando o comando de seed:

   ```shell
   yarn seed
   ```

5. Por fim, inicie o servidor de desenvolvimento com o comando:

   ```shell
   yarn dev
   ```

Certifique-se de que o servidor esteja em execução e pronto para aceitar solicitações.

## Melhorias no código e implementação:

- Tratamento de erros: Aprimorar o tratamento de erros para fornecer respostas mais descritivas e adequadas ao cliente.

- Testes automatizados: Implementar testes automatizados para verificar a funcionalidade correta do código. Incluindo testes unitários para cada unidade de código individual e testes de integração para garantir a interação adequada entre os componentes.

## Escalabilidade e desempenho:

- Caching: A adição de uma camada de cache para armazenar dados frequentemente acessados, reduzindo assim a carga no banco de dados e melhorando o desempenho.

- Otimização de consultas: Analisar as consultas realizadas no banco de dados e otimize-as quando necessário.

- Escalonamento horizontal: Planejar a arquitetura da aplicação para permitir o escalonamento horizontal. Isso envolve a distribuição de carga em vários servidores, se necessário, para lidar com um grande volume de tráfego e melhorar a disponibilidade.

## Arquitetura em nuvem:

- Containerização: Usar contêineres, como Docker, para empacotar a aplicação e suas dependências. Isso facilita a implantação e o gerenciamento da aplicação em diferentes ambientes.

- Orquestração de contêineres: Usar ferramentas de orquestração de contêineres, como Kubernetes, para implantar e gerenciar os contêineres em um ambiente de produção em escala.

## Contribuição

Se você quiser contribuir para este projeto, fique à vontade para abrir problemas e enviar solicitações de pull requests. Toda contribuição é bem-vinda!
