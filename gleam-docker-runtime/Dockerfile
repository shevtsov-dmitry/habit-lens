FROM erlang:alpine

# ---- versions ----
ENV GLEAM_VERSION=1.13.0
ENV GLEAM_HOME=/opt/gleam
ENV PATH="${GLEAM_HOME}:${PATH}"

# ---- system deps ----
RUN apk add --no-cache \
    bash \
    curl \
    git \
    ca-certificates \
    build-base

# ---- install rebar3 ----
RUN curl -fsSL https://s3.amazonaws.com/rebar3/rebar3 \
    -o /usr/local/bin/rebar3 && \
    chmod +x /usr/local/bin/rebar3

RUN /usr/local/bin/rebar3 local install

# ---- install gleam ----
RUN mkdir -p ${GLEAM_HOME} && \
    curl -fsSL https://github.com/gleam-lang/gleam/releases/download/v${GLEAM_VERSION}/gleam-v${GLEAM_VERSION}-x86_64-unknown-linux-musl.tar.gz \
    | tar -xz -C ${GLEAM_HOME}

# ---- sanity check ----
RUN erl -version && \
    rebar3 --version && \
    gleam --version

WORKDIR /app
