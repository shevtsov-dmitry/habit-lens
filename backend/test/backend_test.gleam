import gleam/http/request
import gleam/http/response.{type Response}
import gleam/httpc
import gleam/result
import gleeunit

pub fn main() -> Nil {
  gleeunit.main()
}

const endpoint_url = "http://localhost:8000"

pub fn default_endpoint_test() {
  let assert Ok(resp) = request_to(endpoint_url)
  assert resp.status == 200
  assert resp.body == "Fine request.\n"
}

pub fn nonexistent_endpoint_test() {
  let assert Ok(resp) = request_to(endpoint_url <> "/nonexistentpath")
  assert resp.status == 400
  assert resp.body == "Endpoint doesn't exist in the API.\n"
}

fn request_to(endpoint_url: String) -> Result(Response(String), httpc.HttpError) {
  let assert Ok(base_req) = request.to(endpoint_url)
  let req =
    request.prepend_header(base_req, "accept", "text/plain; charset=utf-8")

  use resp <- result.try(httpc.send(req))

  Ok(resp)
}
