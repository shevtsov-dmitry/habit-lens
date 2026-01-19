package app.habittracker.backend.timer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("api/v0/timers")
public class TimerController {

  private final ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();

  @GetMapping
  public SseEmitter timer() {
    SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);

    executor.scheduleAtFixedRate(
        () -> {
          try {
            emitter.send(System.currentTimeMillis());
          } catch (IOException e) {
            emitter.completeWithError(e);
          }
        },
        0,
        500,
        TimeUnit.MILLISECONDS);

    emitter.onCompletion(() -> System.out.println("SSE completed"));
    emitter.onTimeout(emitter::complete);

    return emitter;
  }
}
