# Events

**This is still a work in progress**

Events are the fundamental building block of Event Modeled information architectures and are the fundamental unit of storage in Event Sourced systems. They are the digital representation of facts. This article explores the nature of events and how to work with them effectively.

## What are Events?

An event is a fact that has occurred within a system which captures an important change of state. The outcome of an interaction. Events are given intentful names using past tense verbs. This naming convention helps to clearly distinguish events from commands, and emphasizes their nature as historical facts. For example:

- Order Placed
- Payment Processed
- Inventory Reserved
- Shipment Delivered

## Characteristics

**Immutable**

Once created, an event should never be modified. This can be enforced syntactically in many programming languages, otherwise it requires diligence by the software developers and system operators to enforce. This trait can also be enforced logically or physically using write-once read-many (WORM) storage devices.

**Atomic**

Each event should represents a single, complete fact. They should be clear and unambiguous on their own. A discrete piece of truth that make senses as a stand-alone real-world occurence.

This trait improves composability. Systems can react flexibly and independently to each event.

**Descriptive**

Events should clearly indicate what happened. Their role is not just technical, events bridge the gap between a problem domain and software. Order Shipped clearly conveys what happened, where Update Order Status is vague. Descriptive names improve communication and understanding. 

Descriptive events aren't just nice to have, they are essential for building systems that are transparent and resilient over time. They tell the "what" in clear terms, letting the "how" be handled by the system.

**Contextual**

Events should include all relevent information about what occurred. Without context, event a well-named, descriptive event can be ambiguous or misleading. A good event not only describes what happened, but also who, what, when, where, and why. 

This enables decoupling so downstream consumers can make decisions.

For example: Payment Received

- Was it paid in or full or partial?
- What invoice does this relate to?
- What customer does this relate to?
- What payment method was used?

Systems shouldn't guess, this information should be embedded within the event.

## Representations


