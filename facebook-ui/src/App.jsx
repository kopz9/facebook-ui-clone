import Input from "./components/Input";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-facebook flex items-center justify-center">
        <div className="w-500 pr-8">
          <h1 className="text-blue-facebook font-bold text-5xl">facebook</h1>
          <h2 className="text-3xl text-black">
            O Facebook ajuda você a se conectar e compartilhar com as pessoas
            que fazem parte da sua vida.
          </h2>
        </div>

        <div className="bg-white p-4 w-[300px] rounded-md justify-center items-center flex flex-col shadow-2xl">
          <Input placeholder="Email ou Telefone" />
          <Input placeholder="Senha" />
          <button className="h-12 w-full bg-blue-facebook rounded-md text-white">
            Entrar
          </button>
          <a className="text-blue-facebook cursor-pointer mt-1 mb-4" href="#">
            Esqueceu sua senha?
          </a>
          <div className="w-full border-t border-gray-200"></div>
          <button className="h-12 bg-green-facebook px-4 rounded-md text-white mt-4">
            Criar nova conta
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
