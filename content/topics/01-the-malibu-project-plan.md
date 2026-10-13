---
title: "Topic 01: The Malibu Project Plan & Architecture Roadmap"
date: "2026-10-13"
summary: "The engineering blueprint for Malibu: building an autoregressive Transformer language model from scratch in raw PyTorch, following the 6-phase construction roadmap."
tags: ["Architecture", "Roadmap", "Foundations", "PyTorch"]
readTime: "5 min read"
---

Welcome to the Malibu engineering logs. 

I am **Bradley Joe (Joseph)**, a second-year MEng Computer Science with AI student at the University of York. 

Most people in AI education today take high-level shortcuts: they import Hugging Face, instantiate a pre-built `Trainer`, or call an external LLM endpoint through an API wrapper. While useful for commercial applications, that approach leaves the fundamental mechanics of artificial intelligence as an opaque black box.

**Malibu** exists to dismantle that black box.

It is an open-source study project building a causal autoregressive Transformer language model from first principles in raw PyTorch—zero high-level wrapper frameworks (no Hugging Face `Trainer`, no LangChain), just raw tensor operations, attention mathematics, and foundational architecture.

---

## 🎯 Core Project Goals

1. **Master the Mathematics from Scratch**: Implement every mathematical layer of modern Large Language Models (LLMs) directly from raw linear algebra equations.
2. **Zero High-Level Abstractions**: Write custom tokenization, multi-head self-attention mechanisms, and training loops entirely by hand.
3. **Local Hardware Acceleration**: Train and benchmark locally on Apple Silicon (Metal Performance Shaders / MPS GPU) with zero external API fees.
4. **Production Cloud Serving**: Once trained, package the model into a high-performance REST API and deploy it to the cloud using AWS (S3 model checkpointing & App Runner containerization).

---

## 🗺️ The 6-Phase Construction Roadmap

Here is the exact architectural roadmap outlined in the [Malibu GitHub repository](https://github.com/bradleyjoejoseph/malibu):

### Phase 1: Custom Tokenizer from Scratch
Computers cannot comprehend characters or words—they only operate on numeric matrices. In this phase, I construct:
- Text-to-integer mappings (`stoi` and `itos` tables).
- Byte and character vocabulary serialization.
- Automated round-trip verification to ensure lossless encode/decode pipelines.

### Phase 2: Embeddings & Geometric Coordinates
Once tokens are integers, they must be projected into dense vector space:
- Token embedding layers (`nn.Embedding`) mapping discrete IDs to continuous $d_{\text{model}}$ vectors.
- Positional encodings to inject spatial order and token sequence awareness into the permutation-invariant attention engine.

### Phase 3: Multi-Head Causal Self-Attention
The mathematical core of modern autoregressive intelligence:
- Linear projection matrices for Queries ($Q$), Keys ($K$), and Values ($V$).
- Scaled dot-product calculation: 
  $$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$
- Lower-triangular causal masking to enforce strict temporal causality (preventing the model from attending to future tokens).
- Splitting into parallel attention heads and recombinative projection.

### Phase 4: Transformer Blocks & Training Engine
Assembling the full deep neural architecture:
- Pre-LayerNorm / RMSNorm blocks for gradient flow stabilization.
- Position-wise Feed-Forward Networks (FFN) with non-linear activations (GELU).
- Residual skip-connections around each attention and feed-forward sub-layer.
- Full training loop implementation: Cross-Entropy loss computation, AdamW optimization, gradient clipping, and cosine learning rate scheduling.

### Phase 5: Inference & Text Generation Loop
Transitioning from training to creative autoregressive generation:
- Next-token generation loop appending predicted tokens iteratively.
- Sampling controls: Temperature scaling, Top-$K$ truncation, and Top-$P$ (Nucleus) filtering for coherent generation.

### Phase 6: Cloud Serving & AWS MLOps
Deploying the custom model for real-world interaction:
- Lightweight FastAPI inference microservice with interactive documentation.
- Cloud model artifact registry using Amazon S3.
- Docker containerization and cloud hosting on AWS.

---

## 🛠️ Stack & Engineering Environment

- **Language**: Python 3.12
- **Deep Learning Framework**: PyTorch (raw tensors & `nn.Module` primitives)
- **Hardware Target**: Apple Silicon MPS (Metal Performance Shaders) / CUDA Native / CPU
- **Testing & Verification**: Automated `pytest` suite enforcing tensor shape, attention mask, and loss invariants

---

## What’s Ahead in This Journal

As I progress through each phase of development, I will write down the mathematical breakdowns, implementation hurdles, and architectural decisions right here in these engineering logs.

All source code and test suites are public on GitHub:
👉 **[github.com/bradleyjoejoseph/malibu](https://github.com/bradleyjoejoseph/malibu)**
