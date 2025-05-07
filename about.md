# About 

**Evntd**, pronounced *evented*, is a nod to the best practice of naming events in the past tense. The name has been disemvoweled because the original was taken (which, honestly, isn't surprising 40 years into the .com era).

The name also reflects my focus on **Event Modeling**, **Event Sourcing**, and the messaging systems and tooling that bring these architectures to life.

My mission is to help technical teams improve how they communicate with stakeholders, define actionable requirements, and deliver on their commitments without delays or budget overruns.

We owe it to the industry and to ourselves to hold a higher standard. Project delays and blown budgets are far too common. We must do better. 

## Why Event Modeling?

Event modeling is a technology-agnostic approach to system design. It's highly collaborative and results in a detailed, visual plan for achieving desired outcomes based on information completeness. Having a plan reduces ambiguity and risk. Events in the model form a **shared language**, enabling clear communication between all parties involved. Its lightweight notation makes Event Modeling easy to teach.

There is no need to get bogged down in technical details at the outset of a project, wait until the [last responsible moment](https://blog.codinghorror.com/the-last-responsible-moment/). Non-technical stakeholders don't need or want to hear jargon, they want to solve business problems and see meaningful outcomes. 

Yes, technical decisions matter, and teams should make the best ones they can within their constraints. But that's the sausage-making, the part that can (and should) stay within the team. I don't know how a car works under the hood, and I don't need a salesperson to explain combustion engines to make a buying decision. I want the capabilities: a comfortable ride from point A to B, and a decent stereo.

## Why Event Sourcing?

The future is filled with uncertainty. We have the capability, and more than enough storage, so why would we ever choose to delete data? Of course, there are valid reasons: privacy concerns, legal obligations, regulatory requirements, and data retention policies. But these represent a different class of deletion; purposeful, governed by business rules, not the incidental data loss that comes from overwriting or discarding information by default.

Take GDPR's "right to be forgotten" as an example. It mandates that individuals can request their personal data be erased. That's a deliberate business requirement with traceability, auditability, and consent. Even then, we often don't delete the data outright. Instead, we render it unreadable or inaccessible. Such as by destroying encryption keys, rather than physically removing it from storage.

Contrast this with a traditional CRUD-based system, where updating or deleting a record often means permanently discarding its previous state. That kind of deletion isn't policy-driven, it's just a side effect of how the system was designed. Event sourced systems avoid this by default, preserving the full history unless explicitly instructed otherwise.

Just like an automated test suite give you confidence no regressions have occurred before deployment, Event Sourcing offers similar assurance: the system retains all information during its operation, enabling audit, traceability, and resilience by design.