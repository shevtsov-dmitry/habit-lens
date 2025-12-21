import ewe.{type Request, type Response}
import gleam/erlang/process
import gleam/http/request
import gleam/http/response
import gleam/io
import gleam/otp/actor
import logging

pub fn main() -> Nil {
  logging.configure()
  logging.set_level(logging.Info)

  let assert Ok(_) =
    ewe.new(endpoints)
    |> ewe.bind_all()
    |> ewe.listening(port: 8000)
    |> ewe.start()

  process.sleep_forever()
}

fn endpoints(request: Request) -> Response {
  case request.path {
    "/" -> {
      response.new(200)
      |> response.set_header("content-type", "text/plain; charset=utf-8")
      |> response.set_body(ewe.TextData("Fine request.\n"))
    }
    _ -> {
      response.new(400)
      |> response.set_header("content-type", "text/plain; charset=utf-8")
      |> response.set_body(ewe.TextData("Endpoint doesn't exist in the API.\n"))
    }
  }
}
