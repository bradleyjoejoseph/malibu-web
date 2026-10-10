---
title: "Topic 00: Why I Am Building Malibu From Scratch"
date: "2026-10-10"
summary: "Why calling third-party APIs doesn't teach you real AI, and why I decided to build a causal Transformer model from raw mathematics and PyTorch tensors."
tags: ["Vision", "Foundations", "FullStackAI"]
readTime: "4 min read"
---

Most students who claim to build "AI applications" in university are doing the exact same thing: they import a library, call `client.chat.completions.create()`, pass a prompt to OpenAI or Anthropic, and wrap it in a web interface.

There is nothing wrong with using APIs, but it doesn't teach you **how artificial intelligence actually works**. 

You don't understand how words turn into geometry in high-dimensional space. You don't understand why a causal mask prevents future token leakage. And you don't understand how loss functions backpropagate gradients through multi-head attention layers.

That is why I started **Malibu**.

---

## The Vision Behind Malibu

I am currently a second-year MEng Computer Science with AI student at the University of York. If my degree title has "Artificial Intelligence" in it, I refuse to be someone who only knows how to write JSON prompts for somebody else’s model.

My goal with Malibu is simple: **Build an autoregressive Transformer language model completely from first principles in raw PyTorch.**

- **Zero wrapper frameworks**: No Hugging Face `Trainer`, no LangChain, no high-level shortcuts.
- **Pure tensor math**: Writing Query, Key, and Value projections, scaled dot-product attention, RMSNorm, and Feed-Forward networks from scratch.
- **Local execution**: Training and testing on my Mac using Apple Silicon MPS (Metal Performance Shaders) GPU acceleration with zero dollar cost.
- **Open research**: Documenting every single brick, math insight, and bug openly on this site.

---

## The Reality of Frontier AI

When I started this project, my ambition was simple: *Can I build something that goes band-for-band with the likes of Claude 3.5 Sonnet, Gemini, and GPT-5?*

Here is the hard engineering truth I had to confront:

Frontier models take **tens of millions of dollars of compute** running on clusters of 20,000+ GPUs for months across trillions of words. As a student on a laptop, you cannot out-compute Google or Anthropic on raw general knowledge.

**However, the math is 100% identical.**

The Transformer equations inside a 3-million parameter model and a 300-billion parameter frontier model are fundamentally the same:
- Multi-Head Self-Attention ($\text{Attention}(Q, K, V) = \text{softmax}((QK^T)/\sqrt{d_k})V$)
- Residual skip-connections
- Normalization and SwiGLU / GELU activations
- Autoregressive next-token prediction

If I can construct, train, and optimize this engine myself, I understand the exact same machinery powering the world's most capable AI labs.

---

## What’s Next: Phase 1 (The Tokenizer)

Computers cannot read English. A computer has never seen the letter "A" or the word "Apple"—it only understands numbers.

Before Malibu can even begin to "think", I have to build its translator: **The Tokenizer**. 

In the next post, I will break down how text gets converted into integer token IDs, how vocabulary mappings work, and the code I wrote to build Malibu’s first brick.

Stay tuned.
